from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from manajemen_mk.routes import includeme

if __name__ == "__main__":
    with Configurator() as config:
        config.include(includeme)
        config.scan("manajemen_mk.views")
        app = config.make_wsgi_app()

    server = make_server("0.0.0.0", 6543, app)
    print("Server berjalan di http://localhost:6543")
    server.serve_forever()
