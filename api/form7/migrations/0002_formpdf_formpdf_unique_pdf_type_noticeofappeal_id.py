# Generated by Django 4.0.1 on 2022-01-25 23:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('form7', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FormPdf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('data', models.BinaryField(blank=True, null=True)),
                ('json_data', models.BinaryField(blank=True, null=True)),
                ('key_id', models.CharField(blank=True, max_length=32, null=True)),
                ('pdf_type', models.CharField(blank=True, max_length=32, null=True)),
                ('version', models.CharField(blank=True, max_length=32, null=True)),
                ('noticeOfAppeal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='form_pdf', to='form7.noticeofappeal')),
            ],
        ),
        migrations.AddConstraint(
            model_name='formpdf',
            constraint=models.UniqueConstraint(fields=('noticeOfAppeal_id', 'pdf_type'), name='unique_pdf_type_noticeOfAppeal_id'),
        ),
    ]
