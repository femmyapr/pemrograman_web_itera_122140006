from pyramid.response import Response
from pyramid.view import view_config
from models import Matakuliah
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DBSession = sessionmaker(bind=create_engine('sqlite:///matakuliah.db'))

@view_config(route_name='get_all', renderer='json', request_method='GET')
def get_all(request):
    session = DBSession()
    data = session.query(Matakuliah).all()
    return [dict(id=m.id, kode_mk=m.kode_mk, nama_mk=m.nama_mk, sks=m.sks, semester=m.semester) for m in data]

@view_config(route_name='add', renderer='json', request_method='POST')
def add(request):
    session = DBSession()
    body = request.json_body
    mk = Matakuliah(
        kode_mk=body['kode_mk'],
        nama_mk=body['nama_mk'],
        sks=body['sks'],
        semester=body['semester']
    )
    session.add(mk)
    session.commit()
    return Response(f"Matakuliah {mk.nama_mk} ditambahkan", status=201)