def process_status(data):
    status = data.get('status')
    if status in ['active', 'inactive']:
        print(status.capitalize())
    else:
        print('Unknown')

process_status({'status': 'active'})
process_status({'status': 'inactive'})
process_status({'status': 'not known'})
