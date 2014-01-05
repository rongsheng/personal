"""
    Simple sockjs-tornado chat application. By default will listen on port 5301.
"""
import tornado.ioloop
import tornado.web
import json

import sockjs.tornado
import MySQLdb


class IndexHandler(tornado.web.RequestHandler):
    """Regular HTTP handler to serve the chatroom page"""
    def get(self):
        self.render('index.html')


class ChatConnection(sockjs.tornado.SockJSConnection):
    """Chat connection implementation"""
    # Class level variable
    participants = set()

    def on_open(self, info):
    	self.is_auth = False

        # Add client to the clients list
        self.participants.add(self)

    def on_message(self, message):
    	if self.is_auth === False:
            db = MySQLdb.connect(host = "localhost", # your host, usually localhost
                                 user = "testuser", # your username
                                 passwd = "4Ft79nTCdfvx", # your password
                                 db = "personal") # name of the data base
            for article in db.query("SELECT * FROM articles"):
                print article.title
    	
        # Broadcast message
        self.broadcast(self.participants, message)

    def on_close(self):
        # Remove client from the clients list and broadcast leave message
        self.participants.remove(self)

        self.broadcast(self.participants, "Someone left.")

if __name__ == "__main__":
    import logging
    logging.getLogger().setLevel(logging.DEBUG)

    # 1. Create chat router
    ChatRouter = sockjs.tornado.SockJSRouter(ChatConnection, '/chat')

    # 2. Create Tornado application
    app = tornado.web.Application(
            [(r"/", IndexHandler)] + ChatRouter.urls
    )

    # 3. Make Tornado app listen on port 5301
    app.listen(5301)

    # 4. Start IOLoop
    tornado.ioloop.IOLoop.instance().start()