from app import create_app
import os

if __name__ == '__main__':
    client = create_app()
    port = int(os.environ.get("PORT", 5000))

    client.run(host="0.0.0.0", port=port)