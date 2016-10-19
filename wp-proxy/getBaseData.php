<?php

require_once('methods/getMenu.php');

function getFlatMenu () {
    $menu = getMenu('main_nav');
    $flatMenu = [];
    foreach($menu as $item) {
        $flatMenu[] = [
            "url" => $item->url,
            "title" => $item->title,
            "id" => $item->ID
        ];
    }
    return $flatMenu;
}

function getFlatPages () {
    $pages = get_pages(["hierarchical" => false]);
    $flatPages = [];
    foreach($pages as $page){
        $flatPages[] = [
            "post_author" => $page->post_author,
            "post_date" => $page->post_date,
            "post_id" => $page->ID,
            "post_content" => $page->post_content,
            "post_title" => $page->post_title,
            "post_name" => $page->post_name,
            "post_image" => wp_get_attachment_url(get_post_thumbnail_id($page->ID)),
            "actions" => get_post_meta($page->ID, "actions", true),
            "overlay_title" => get_post_meta($page->ID, "overlay_title", true),
            "overlay_description" => get_post_meta($page->ID, "overlay_description", true),
            "background_color" => get_post_meta($page->ID, "background_color", true)
        ];
    }
    return $flatPages;
}

function getFlatCategoriesOfPost ($id) {
    $categories = wp_get_post_categories($id);
    $flatCategories = [];
    foreach($categories as $cat){
        $flatCategories[] = [
            'category_id' => $cat
        ];
    }
    return $flatCategories;
}

function getFlatPosts () {
    $pages = get_posts(["hierarchical" => false]);
    $flatPages = [];
    foreach($pages as $page){
        $flatPages[] = [
            "post_author" => $page->post_author,
            "post_date" => $page->post_date,
            "post_id" => $page->ID,
            "post_content" => $page->post_content,
            "post_title" => $page->post_title,
            "post_name" => $page->post_name,
            "post_image" => wp_get_attachment_url(get_post_thumbnail_id($page->ID)),
            "post_categories" => getFlatCategoriesOfPost($page->ID),
            "actions" => get_post_meta($page->ID, "actions", true),
            "overlay_title" => get_post_meta($page->ID, "overlay_title", true),
            "overlay_description" => get_post_meta($page->ID, "overlay_description", true),
            "background_color" => get_post_meta($page->ID, "background_color", true)
        ];
    }
    return $flatPages;
}

function getFlatCategories () {
    $categories = get_categories();
    $flatCategories = [];
    foreach($categories as $item) {
        $flatCategories[] = [
            "category_id" => $item->term_id,
            "name" => $item->name,
            "slug" => $item->slug
        ];
    }
    return $flatCategories;
}

function getFlatAuthors(){
    $authors = get_users();
    $authorsFlat = [];
    foreach($authors as $author){
        $authorsFlat[] = [
            "id" => $author
        ];
    }
    return $authorsFlat;
}

function getBaseData () {

    $data = [
        "menu" => getFlatMenu(),
        "pages" => getFlatPages(),
        "posts" => getFlatPosts(),
        "categories" => getFlatCategories(),
        "authors" => getFlatAuthors()
    ];

    return $data;
}