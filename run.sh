#/bin/bash 
aws s3 sync ./dist/public/ s3://graceassociate1/ --exclude ".DS_Store" --profile anisto 
aws cloudfront create-invalidation --distribution-id E3FI9CL76TQGGI --paths "/*"  --profile anisto