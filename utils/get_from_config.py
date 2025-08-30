import json

def get_from_config_by_id(obj_id, file_name, raise_error=True):
    with open(file_name) as json_file:
        json_data = json.load(json_file)
        matches = [x for x in json_data if x['ID'] == obj_id]

        if not matches:
            if raise_error:
                raise ValueError(f"No match found with ID: {obj_id}")
            else:
                return None

        return matches[0]

def get_from_config_list(file_name):
    with open(file_name) as json_file:
        json_data = json.load(json_file)
        return json_data
