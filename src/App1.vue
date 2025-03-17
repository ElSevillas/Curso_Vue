<script>
export default 
{
  
  data() 
  {
    return {
      name:'John Doe',
      status: 'dasfdasf',
      tasks: ['Tast One','Tast Two','Tast Three'],
      link: 'https://google.com',
    };
  },

  methods:
  {
    toggleStatus() 
    {
      
      if(this.status === 'active') 
      {
        this.status = 'pending';
      }

      else if(this.status === 'pending') 
      {
        this.status = 'inactive';
      }
      
      else 
      {
        this.status = 'active';
      }

    }
  }

};

</script>

<template>
  
  <!-- Metodo Nombre (name)-->
  <h1>{{ name }}</h1>

  <!-- If/Else con Boolean (status)-->
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <!-- Array (tasks) -->
  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- Links (link) -->
  <!-- <a v-bind:href="link">Click for Google</a> -->
  <a :href="link">Click for Google</a>

  <!-- Boton (methods) -->
  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>

</template>