# Generated by Django 4.0.6 on 2022-07-06 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BestBookList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('author', models.TextField()),
                ('content', models.TextField()),
                ('dt_created', models.DateField(auto_now=True)),
            ],
        ),
    ]