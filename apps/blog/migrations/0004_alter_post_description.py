# Generated by Django 4.2.6 on 2023-10-16 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_remove_post_excerpt_post_content_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='description',
            field=models.TextField(max_length=255),
        ),
    ]
