from sqlalchemy import engine_from_config
from models import Base

settings = {
    'sqlalchemy.url': 'sqlite:///matakuliah.db'
}
engine = engine_from_config(settings, prefix='sqlalchemy.')
Base.metadata.create_all(engine)

print("Database berhasil dibuat.")
