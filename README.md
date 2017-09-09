# pub.distantshores.org

### Pull from S3
```bash
aws s3 cp --recursive --exclude "*.jpg" --profile production s3://pub.distantshores.org /var/www/projects/pub.distantshores.org/public
```

### Push to S3
```bash
aws s3 cp --recursive --profile production /var/www/projects/pub.distantshores.org/public s3://pub.distantshores.org 
```
