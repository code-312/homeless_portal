# This is just a skeleton setup to test and make sure that one can start up a falcon app after running requirements.txt 
# and such. 

# To do
# - Once requirements are set, determine the data source that we need to cache
# - Choose storage DBMS


import falcon

app = falcon.API()


class HelloResource(object):
    def on_get(self, req, res):
        res.status = falcon.HTTP_200
        res.body = ('Ohh man you got a reply. Hello. Hello.')

hello_resource = HelloResource()

app.add_route('/hello', hello_resource)

