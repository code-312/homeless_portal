import falcon

app = falcon.API()


class HelloResource(object):
    def on_get(self, req, res):
        res.status = falcon.HTTP_200
        res.body = ('Ohh man you got a reply. Hello. Hello.')

hello_resource = HelloResource()

app.add_route('/hello', hello_resource)

