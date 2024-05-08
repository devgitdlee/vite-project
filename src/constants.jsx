const API_URL = 'http://localhost:8000';

export default{
    IMAGE_URL : '/src/assets/',
    FILE_DOWNLOAD : API_URL+'/download/', 

    SIGN_UP_API : API_URL+'/api/users/signup',
    LOGIN_API : API_URL+'/api/users/login',

    COMMON_LIST_API : API_URL+'/api/common/list/',
    COMMON_ADD_API : API_URL+'/api/common/add',
    COMMON_DEL_API : API_URL+'/api/common/del',

    MENU_LIST_API : API_URL+'/api/menus/list',
    MENU_ADD_API : API_URL+'/api/menus/add',
    MENU_DEL_API : API_URL+'/api/menus/del',


    FOOD_LIST_API : API_URL+'/api/food/list/',
    FOOD_ONE_API : API_URL+'/api/food/one/',
    FOOD_ADD_API : API_URL+'/api/food/add',
    FOOD_DEL_API : API_URL+'/api/food/del',

    FOOD_ORDER_LIST_API : API_URL+'/api/foodorder/list',
    FOOD_ORDER_ADD_API : API_URL+'/api/foodorder/add',
    FOOD_ORDER_DEL_API : API_URL+'/api/foodorder/del',
} 