from rest_framework import serializers
from MySite.apps.main.models import ChatUser


class ChatUserSerializer(serializers.HyperlinkedModelSerializer):
    # temp_user = serializers.HyperlinkedRelatedField(many=True, view_name='temp-user-detail')

    class Meta:
        model = ChatUser
        # fields = ('url', 'username', 'first_name', 'last_name', 'company', 'email')
