from flask_jwt_extended import JWTManager

jwt = JWTManager()

revoked_tokens = set()

@jwt.token_in_blocklist_loader
def check_if_token_in_blacklist(jwt_header, jwt_data):
    jti = jwt_data['jti']
    return jti in revoked_tokens
def init_jwt(app):
    jwt.init_app(app)
