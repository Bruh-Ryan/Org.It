from flask import Flask, render_template
from loginpage import login

app = Flask(__name__)

app.register_blueprint(login)

@app.route("/")
def home():
    return render_template('hometest.html')

if __name__ == "__main__":
    app.run(debug=True)
