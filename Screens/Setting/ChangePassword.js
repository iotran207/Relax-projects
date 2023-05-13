import { View,Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React from 'react';
import axios from "axios";


export default function ChangePassword({ navigation }) {
    const [oldPassword, setOldPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    return(
        <View>
            <Button title="Xác nhận đổi mật khẩu" onPress={() => {
                if(oldPassword == "" || newPassword == ""){
                    alert("Bạn chưa nhập đủ thông tin");
                }
                else{
                    console.log(this.user_id);
                    console.log(oldPassword);
                    console.log(newPassword)
                    axios.post("http://18.141.160.222/ChangePassword", {
                    id:this.user_id,
                    password: oldPassword,
                    newpassword: newPassword
                },)
                .then(function (response) {
                    if(response.data.status == 'success'){
                        alert("Đổi mật khẩu thành công! ╰(*°▽°*)╯");
                        navigation.navigate('LoginScreen');
                    }
                    else{
                        alert("Đổi mật khẩu thất bại!Vui lòng nhập lại mật khẩu cũ đã 🤨🤨🤨");
                    }
                }
                )
                .catch(function (error) {
                    console.log(error);
                    alert(error)
                })}
            }}></Button>
            <View style={{
                marginTop: 200,
            }}>
            <TextInput style={{
                height: 60,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 20,
                borderRadius: 5
            }}
                placeholder="                 Nhập mật khẩu cũ"
                onChangeText={text => setOldPassword(text)}
            ></TextInput>
            
            <TextInput style={{
                height: 60,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 20,
                borderRadius: 5,
            }}
            placeholder="                 Nhập mật khẩu mới"
            onChangeText={text => setNewPassword(text)}
            ></TextInput>
            </View>

        </View>
    );
}