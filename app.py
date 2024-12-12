from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'This is 好心 aka neu 大美女!'


if __name__ == '__main__':
    app.run()
