def includeme(config):
    config.add_route('get_all', '/matakuliah')
    config.add_route('add', '/matakuliah')
    config.scan()
