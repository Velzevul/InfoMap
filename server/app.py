from flask import Flask, request
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.cors import CORS


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://info_map:@localhost/info_map'
app.config['SQLALCHEMY_ECHO'] = False
db = SQLAlchemy(app)
CORS(app)


class Log(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    participant_name = db.Column(db.String(50))
    condition = db.Column(db.String(20))
    tutorial_name = db.Column(db.String(255))
    tutorial_host = db.Column(db.String(20))
    tweet_author = db.Column(db.String(20))
    reason = db.Column(db.String(255))


@app.route('/')
def index():
    print('I work!')
    return 'Info Map Server'
    # write log to the db


@app.route('/log', methods=['POST'])
def log():
    print('started')
    try:
        data = Log(participant_name=request.form['participantName'],
                   condition=request.form['condition'],
                   tutorial_name=request.form['tutorialName'],
                   tutorial_host=request.form['tutorialHost'],
                   tweet_author=request.form['tweetAuthor'],
                   reason=request.form['reason'])
    except Exception as e:
        print('Cannot create record')
        print(request.form)
        print(e)
        return False

    print('created')
    db.session.add(data)
    db.session.commit()
    print('saved')
    return 'Saved'


if __name__ == '__main__':
    app.run(host='0.0.0.0')
