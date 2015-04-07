from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://soft_info:@localhost/soft_info'
app.config['SQLALCHEMY_ECHO'] = False
db = SQLAlchemy(app)

@app.route('/log-action', methods=['POST'])
def log():
    pass
    # write log to the db
