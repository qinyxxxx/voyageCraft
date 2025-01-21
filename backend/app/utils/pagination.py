from flask import request

class Pagination:
    @staticmethod
    def paginate(query, schema, page_param="page", per_page_param="per_page"):
        """
        Paginate a SQLAlchemy query.
        :param query: SQLAlchemy query object
        :param schema: Serializer schema (for transforming query results)
        :param page_param: Query parameter for page number
        :param per_page_param: Query parameter for items per page
        :return: A dictionary with paginated results and metadata
        """
        page = request.args.get(page_param, 1, type=int)
        per_page = request.args.get(per_page_param, 10, type=int)

        paginated = query.paginate(page=page, per_page=per_page, error_out=False)
        items = [schema.serialize(item) for item in paginated.items]

        return {
            "items": items,
            "page": paginated.page,
            "per_page": paginated.per_page,
            "total": paginated.total,
            "pages": paginated.pages,
        }