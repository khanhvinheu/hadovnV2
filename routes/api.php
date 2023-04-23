<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');

    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::delete('logout', 'AuthController@logout');
        Route::get('me', 'AuthController@user');
        Route::group(
            [
                'middleware' => 'permission:' . \ACL::PERMISSION_PERMISSION_MANAGE,
            ],
            function () {
                Route::apiResource('roles', 'RoleController');
                Route::apiResource('permissions', 'PermissionController');
            }
        );

    });
});
Route::prefix('admin')->namespace('admin')->group(function () {
    // Upload
    Route::post('upload', 'UploadController@upload');
    Route::post('removeFile', 'UploadController@removeFile');
    // Category
    Route::get('categorys','CategoryController@index');
    Route::get('categorys/getParent/{id}','CategoryController@getParent');
    Route::get('categorys/detail/{id}','CategoryController@show');
    Route::post('categorys/update/{id}','CategoryController@update');
    Route::post('categorys/create','CategoryController@create');
    Route::post('categorys/delete/{id}','CategoryController@destroy');
    // Banner
    Route::get('banners','BannerController@index');
    Route::get('banners/detail/{id}','BannerController@show');
    Route::post('banners/delete/{id}','BannerController@destroy');
    Route::post('banners/create','BannerController@store');
    Route::post('banners/update/{id}','BannerController@update');
    //Product Color
    Route::get('product_color','ProductColorController@index');
    Route::get('product_color/detail/{id}','ProductColorController@show');
    Route::post('product_color/delete/{id}','ProductColorController@destroy');
    Route::post('product_color/create','ProductColorController@store');
    Route::post('product_color/update/{id}','ProductColorController@update');
    //Product Size
    Route::get('product_size','ProductSizeController@index');
    Route::get('product_size/detail/{id}','ProductSizeController@show');
    Route::post('product_size/delete/{id}','ProductSizeController@destroy');
    Route::post('product_size/create','ProductSizeController@store');
    Route::post('product_size/update/{id}','ProductSizeController@update');
    // Product
    Route::get('products','ProductController@index');
    Route::get('products/{id}','ProductController@show');
    Route::post('products/create','ProductController@store');
    Route::post('products/delete/{id}','ProductController@destroy');
    Route::post('products/update/{id}','ProductController@update');
    // Route::apiResource('products', 'ProductController');
    //Province
    Route::get('get-full-province','ProvinceController@getFullProvince');
    // Order
    Route::get('orders','OrderController@index');
    Route::post('orders/create','OrderController@create');
    Route::post('orders/delete/{id}','OrderController@destroy');
    Route::post('orders/update/{id}','OrderController@update');

    //Setting
    Route::post('setting/updateSetting','SettingController@UpdateSetting');
    Route::post('setting/updateAllSetting','SettingController@UpdateAllSetting');
    Route::get('setting/fetchSetting','SettingController@fetchSetting');
    //Blog
    // Banner
    Route::get('blogs','BlogController@index');
    Route::get('blogs/detail/{id}','BlogController@show');
    Route::post('blogs/delete/{id}','BlogController@destroy');
    Route::post('blogs/create','BlogController@store');
    Route::post('blogs/update/{id}','BlogController@update');
});

