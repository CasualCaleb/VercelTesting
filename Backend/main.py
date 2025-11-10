from app import create_app

if __name__ == '__main__':
    client = create_app()
    client.run()