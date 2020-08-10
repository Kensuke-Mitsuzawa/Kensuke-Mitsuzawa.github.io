#! -*- coding: utf-8 -*-
import pandas
import pathlib
import typing
import itertools
import numpy as np
import json


def convert_data_structure(records: typing.List[typing.Dict[str, str]], message_field_name: str):
    message_objects = {}
    for section_key, g_obj in itertools.groupby(sorted(records, key=lambda r: r['section']), key=lambda r: r['section']):
        __ = {record['key']: record[message_field_name] for record in g_obj}
        message_objects[section_key] = __
    else:
        pass

    return message_objects

def main(path_source_excel: str, path_target_dir: str):
    assert pathlib.Path(path_source_excel).exists()
    assert pathlib.Path(path_target_dir).exists()
    df_data = pandas.read_excel(path_source_excel)
    df_data = df_data.replace(np.nan, '', regex=True)

    seq_en_records = df_data[['section', 'key', 'en']].to_dict('record')
    seq_jp_records = df_data[['section', 'key', 'ja']].to_dict('record')
    seq_de_records = df_data[['section', 'key', 'de']].to_dict('record')

    output_object_en = convert_data_structure(seq_en_records, 'en')
    output_object_jp = convert_data_structure(seq_jp_records, 'ja')
    output_object_de = convert_data_structure(seq_de_records, 'de')
    with open(str(pathlib.Path(path_target_dir).joinpath('TranslationsEN.json')), 'w') as f:
        f.write(json.dumps(output_object_en, ensure_ascii=False, indent=4))
    with open(str(pathlib.Path(path_target_dir).joinpath('TranslationsDE.json')), 'w') as f:
        f.write(json.dumps(output_object_de, ensure_ascii=False, indent=4))
    with open(str(pathlib.Path(path_target_dir).joinpath('TranslationsJP.json')), 'w') as f:
        f.write(json.dumps(output_object_jp, ensure_ascii=False, indent=4))

if __name__ == '__main__':
    __path_source_excel = 'Translation.xlsx'
    __path_target_dir = 'src/lib/lang'
    main(__path_source_excel, __path_target_dir)
