export default {
    template: `
    <header class="app-header">
        <div class="header">
            <router-link class="logo-btn" to="/" exact>Appsus</router-link>
        </div>
        <nav class="main-nav">
            <router-link class="header-nav-btn" to="/" exact>Home</router-link> |
            <router-link class="header-nav-btn" to="/about">About</router-link> |
            <router-link class="header-nav-btn" to="/keep">Keep</router-link> |
            <router-link class="header-nav-btn" to="/mail">Mail</router-link>
        </nav>
    </header>
    `,
}
