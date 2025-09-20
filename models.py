from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class JsonData(db.Model):
    __tablename__ = 'json_data'
    id = db.Column(db.String(36), primary_key=True)
    data = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
