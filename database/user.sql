-- ********************************************************************************
-- This script creates the database users and grants them the necessary permissions
-- ********************************************************************************

CREATE USER flip_owner
WITH PASSWORD 'flip_admin';

GRANT ALL
ON ALL TABLES IN SCHEMA public
TO flip_owner;

GRANT ALL
ON ALL SEQUENCES IN SCHEMA public
TO flip_owner;

CREATE USER flip_appuser
WITH PASSWORD 'password';

GRANT SELECT, INSERT, UPDATE, DELETE
ON ALL TABLES IN SCHEMA public
TO flip_appuser;

GRANT USAGE, SELECT
ON ALL SEQUENCES IN SCHEMA public
TO flip_appuser;
