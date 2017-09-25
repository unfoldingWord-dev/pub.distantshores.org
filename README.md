# pub.distantshores.org

### Pull from S3
```bash
aws s3 cp --recursive --exclude "images/rg/*" --profile production s3://pub.distantshores.org /var/www/projects/pub.distantshores.org/public
```

### Push to S3
```bash
aws s3 cp --recursive --exclude "images/rg/*" --profile production /var/www/projects/pub.distantshores.org/public s3://pub.distantshores.org
```

### Push only changed files to S3
```bash
aws s3 sync --profile production /var/www/projects/pub.distantshores.org/public s3://pub.distantshores.org 
```
