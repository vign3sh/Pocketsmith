# Generated by Django 4.1 on 2023-12-10 06:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0004_alter_userprofile_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='pfp',
            field=models.CharField(default='', max_length=10),
        ),
    ]
