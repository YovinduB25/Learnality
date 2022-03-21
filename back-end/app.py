from flask import Flask, render_template, url_for, request, session, redirect, flash
from flask_pymongo import PyMongo
import bcrypt

app = Flask(__name__)
app.config['SECRET_KEY'] = 'testing'

app.config['MONGO_dbname'] = 'DigitalPhoenix.Records'
app.config['MONGO_URI'] = "mongodb+srv://admin:Learnality5@cluster0.uriqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongo = PyMongo(app)

@app.route("/")
@app.route("/main")
def main():
    return render_template('index.html')


@app.route("/signup", methods=['POST'])
def signup():
    if request.method == 'POST':
        users = mongo.db.DigitalPhoenix.Records
        signup_user = users.find_one({'username': request.form['username']})

        request_json = request.get_json()
        fname = request_json.get('fname')
        gender = request_json.get('gender')
        username = request_json.get('username')
        password = request_json.get('password')
        course = request_json.get('course')

        if signup:
            flash(request.form['username'] + ' username is already exist')
        return redirect(url_for('signup'))

    return render_template('signup.html')

@app.route('/index')
def index():
    if 'username' in session:
        return render_template('index.html', username=session['username'])

    return render_template('index.html')

@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        users = mongo.db.DigitalPhoenix.Records
        signin_user = users.find_one({'username': request.form['username']})

        if signin_user:
            if bcrypt.hashpw(request.form['password'].encode('utf-8'), signin_user['password'].encode('utf-8')) == \
                    signin_user['password'].encode('utf-8'):
                session['username'] = request.form['username']
                return redirect(url_for('Home'))

        flash('Username and password combination is wrong')
        return render_template('signin.html')

    return render_template('signin.html')


@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))


if __name__ == "__main__":
    app.run(debug=True)
    app.run()