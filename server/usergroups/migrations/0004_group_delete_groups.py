# Generated by Django 4.1 on 2023-12-03 06:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_userprofile_username'),
        ('usergroups', '0003_groups_delete_groupexpense'),
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('grp_name', models.CharField(default='', max_length=255)),
                ('description', models.CharField(default='', max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authentication.userprofile')),
                ('users', models.ManyToManyField(related_name='groups', to='authentication.userprofile')),
            ],
        ),
        migrations.DeleteModel(
            name='Groups',
        ),
    ]
