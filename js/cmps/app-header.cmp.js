export default {
    template: `
    <header class="app-header">
        <div class="header">
            <h1>Appsus</h1>
        </div>
        <nav>
            <router-link to="/" exact>Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/keep">Keep</router-link> |
            <router-link to="/mail">Mail</router-link>
        </nav>
    </header>
    `
}
