# Utils

## Backing up

### Tar to archive using Bzip2:

```shell
tar cfvj archive.tar.bz2 file1 file2
```

### Git mirror backup and restore

#### Git clone mirror

git clone --mirror <target remote git repo>

#### Git push mirror

git push --mirror <name of remote in local git repo>
