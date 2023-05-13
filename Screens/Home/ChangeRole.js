import {View,Text} from 'react-native';
import React from 'react';
import { Button } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios';

export default function ChangeRole(){
    const [selected, setSelected] = React.useState('');
    
    const data = [
        {key:'1', value:'Tài xế'},
        {key:'2', value:'Giáo viên'},
        {key:'3', value:'Quyền quản trị cấp 1'},
    ]
    return(
        <View>
            <Button title="Xác nhận" onPress={() => {
                if(selected == 'Tài xế'){
                    data_get_role = 'driver'
                }
                else if(selected == 'Giáo viên'){
                    data_get_role = 'teacher'
                }
                else if(selected == 'Quyền quản trị cấp 1'){
                    data_get_role = 'admin'
                }
                else if(selected == ''){
                    alert("Bạn chưa chọn quyền cần thay đổi")
                }
                console.log(selected)
                axios.post(url="http://18.141.160.222/AddRole", {
                    "id": this.get_id,
                    "role": data_get_role,
                })
                .then(function (response) {
                    if(response.data.message == 'Đã thêm role thành công'){
                        alert("Thêm role thành công")
                    }
                    if(response.data.message == 'Role đã tồn tại'){
                        alert("Đã có role này, sẽ trở thành xóa role")
                        axios.post(url="http://18.141.160.222/DeleteRole", {
                            "id": this.get_id,
                            "role": selected,
                        })
                        .then(function (response) {
                            if(response.data.message == 'Đã xóa role thành công'){
                                alert("Xóa role thành công")
                            }
                            else if(response.data.message == 'Role không tồn tại'){
                                alert("Không có role này")
                            }
                        }
                        )
                        .catch(function (error) {
                            alert(error)
                        }
                        )
                    }
                })
                .catch(function (error) {
                    alert(error)
                })}}/>
            <View style={{
                marginTop: 50,
            }}>
                <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontFamily: 'Bungee',
                    marginLeft: 10,
                    marginTop: 20,

                }}
                >Lưu ý: Chọn quyền cần thêm vào(nếu quyền đã có thì sẽ trở thành xóa vai trò)</Text>
                <SelectList
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
                label="Categories"/>
            </View>
        </View>
    );
}