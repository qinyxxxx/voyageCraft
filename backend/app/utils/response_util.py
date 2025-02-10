from flask import jsonify

class ResponseUtil:
    @staticmethod
    def success(data=None, message="Success", status_code=200):
        """
        Generate a successful response.
        :param data: Response data
        :param message: Success message
        :param status_code: HTTP status code
        :return: JSON response
        """
        return jsonify({
            "success": True,
            "message": message,
            "data": data or {},
            "error": None
        }), status_code

    @staticmethod
    def error(message="An error occurred", status_code=400, data=None):
        """
        Generate an error response.
        :param message: Error message
        :param status_code: HTTP status code
        :param data: Additional error data
        :return: JSON response
        """
        return jsonify({
            "success": False,
            "message": message,
            "data": data or {},
            "error": {
                "message": message
            }
        }), status_code