# Generated by Django 4.1 on 2022-10-26 04:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0002_alter_profile_introduction'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_img',
            field=models.ImageField(default='profile_pics/default.jpg', null=True, upload_to='profile_pics'),
        ),
    ]