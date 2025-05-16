from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

# Membuat base untuk semua model SQLAlchemy
Base = declarative_base()

class Matakuliah(Base):
    __tablename__ = 'matakuliah'

    id = Column(Integer, primary_key=True, autoincrement=True)
    kode_mk = Column(String, nullable=False, unique=True)
    nama_mk = Column(String, nullable=False)
    sks = Column(Integer, nullable=False)
    semester = Column(String, nullable=False)

    def __repr__(self):
        return f"<Matakuliah(kode_mk='{self.kode_mk}', nama_mk='{self.nama_mk}', sks={self.sks}, semester='{self.semester}')>"