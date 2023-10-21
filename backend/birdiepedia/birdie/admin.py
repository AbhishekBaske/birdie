from django.contrib import admin

# Register your models here.

from .models import Birdie, BirdieUpdate, User

admin.site.register(Birdie)
admin.site.register(BirdieUpdate)
admin.site.register(User)

