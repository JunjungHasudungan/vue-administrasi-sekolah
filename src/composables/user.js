import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default function useUser(){
    const users = ref([]);
    const user = ref([]);

    const getUsers = async ()=> {
        try {
            const result = await axios.get('/users');
            users.value = result.data.data
            
        } catch (error) {
            
        }
    }

    return {
        getUsers
    }
}