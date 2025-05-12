<template>
  <main>
    <div class="container-fluid px-4">
      <h1 class="mt-4">Manage Users</h1>
      <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item"><a href="/admin">User</a></li>
        <li class="breadcrumb-item active">Users</li>
      </ol>

      <div class="mt-5">
        <div class="row">
          <div class="col-12 mx-auto">
            <div class="d-flex justify-content-between">
              <h3>Table users</h3>
              <router-link to="/admin/user/create" class="btn btn-primary">Create a user</router-link>
            </div>

            <hr />
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Full Name</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <th>{{ user.id }}</th>
                  <td>{{ user.email }}</td>
                  <td>{{ user.fullname }}</td>
                  <td>{{ user.role ? user.role.name : 'Chưa phân quyền' }}</td>
                  <td>
                    <router-link :to="`/admin/user/${user.id}`" class="btn btn-success">View</router-link>
                    <router-link :to="`/admin/user/update/${user.id}`" class="btn btn-warning mx-2">Update</router-link>
                    <button @click="deleteUser(user.id)" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <img :src="image" alt="Vue.js" width="50" height="50">

  </main>




</template>

<script>
import image from "@/assets/images/ok.png";
export default {

  name: "UserTable",
  data() {
    return {
      users: [
        {
          id: 1,
          email: "user1@example.com",
          fullname: "Nguyen Van A",
          role: { name: "Admin" }
        },
        {
          id: 2,
          email: "user2@example.com",
          fullname: "Tran Thi B",
          role: null
        },
        {
          id: 3,
          email: "user3@example.com",
          fullname: "Le Van C",
          role: { name: "User" }
        }
      ]
    };
  },
  methods: {
    deleteUser(id) {
      alert(`Bạn muốn xoá user với ID: ${id}`);
      // Bạn có thể thêm logic xoá tại đây nếu kết nối API
    }
  }
};


</script>
