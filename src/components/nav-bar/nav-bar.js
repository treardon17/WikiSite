class NavBar{
    constructor(element){
        this.nav = element;
        this.menuItems = $(element).find('nav > ul > li > a');
        this.currentMenuItem = null;
        this.navBarHighlighter = $(element).find('.nav-bar-highlighter')[0];
        this.updateMenuItemToCurrentPage();
        this.setupOnHover();
    }

    menuItemHovered(menuItem){
        const width = $(menuItem).outerWidth();
        const firstMenuItemOffset = $(this.menuItems[0]).offset().left;
        const menuItemOffset = $(menuItem).offset().left;
        let relativeOffset = menuItemOffset - firstMenuItemOffset;
        $(this.navBarHighlighter).css({'left':relativeOffset, 'width': width});
    }

    //event handlers
    setupOnHover(){
        $(this.menuItems).hover((event)=>{
            this.menuItemHovered(event.target);
        });
        $(this.menuItems).mouseleave(()=>{
            this.updateMenuItemToCurrentPage();
        });
    }

    getMenuItemForCurrentPage(){
        if(this.currentMenuItem === null){
            let currPath = document.location.pathname;
            if(currPath === '/'){ currPath = 'index.php'; } //if it's just a slash, we want the home page

            for(let i = 0; i < this.menuItems.length; i++){
                const menuItemPath = $(this.menuItems[i]).attr('href');
                
                //if the current path is within the link of the menu item
                if(menuItemPath.search(currPath) !== -1){
                    this.currentMenuItem = this.menuItems[i];
                    return this.menuItems[i];
                }
            }
        }else{
            return this.currentMenuItem;
        }
    }

    updateMenuItemToCurrentPage(){
        const currentMenuItem = this.getMenuItemForCurrentPage();
        if(currentMenuItem){
            this.menuItemHovered(currentMenuItem);
        }
    }

}

$(document).ready(()=>{
    let navBars = $('.nav-bar');
    for(let i = 0; i < navBars.length; i++){
        new NavBar(navBars[i]);
    }
});