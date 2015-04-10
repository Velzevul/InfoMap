from flask import Flask, request
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.cors import CORS
from datetime import datetime


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://info_map:@localhost/info_map'
app.config['SQLALCHEMY_ECHO'] = False
db = SQLAlchemy(app)
CORS(app)


class Log(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    counterbalancing = db.Column(db.String(50))
    participant_name = db.Column(db.String(50))
    condition = db.Column(db.String(20))
    tutorial_id = db.Column(db.Integer)
    tutorial_host = db.Column(db.String(20))
    tutorial_name = db.Column(db.String(255))
    reason = db.Column(db.String(255))
    datetime = db.Column(db.DateTime)


@app.route('/')
def index():
    print('I work!')
    return 'Info Map Server'
    # write log to the db


@app.route('/log', methods=['POST'])
def log():
    data = request.get_json()
    try:
        log = Log(participant_name=data.get('participantName'),
                  counterbalancing=data.get('counterbalancing'),
                  tutorial_id=data.get('tutorialId'),
                  condition=data.get('condition'),
                  tutorial_name=data.get('tutorialName'),
                  tutorial_host=data.get('tutorialHost'),
                  reason=data.get('reason'),
                  datetime=datetime.now())
    except Exception as e:
        print('Cannot create record')
        print(request.form)
        print(e)
        return False

    db.session.add(log)
    db.session.commit()
    print('log saved')
    return 'Saved'


if __name__ == '__main__':
    app.run(host='0.0.0.0')
