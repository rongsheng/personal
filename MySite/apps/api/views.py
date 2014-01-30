from MySite.apps.main.models import ChatUser
from MySite.apps.api.serializers import ChatUserSerializer
from rest_framework import viewsets


class ChatUserViewSet(viewsets.ModelViewSet):
    """
    This ViewSet automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = ChatUser.objects.all()
    serializer_class = ChatUserSerializer
