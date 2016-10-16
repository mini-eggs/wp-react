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
            "post_image" => wp_get_attachment_url(get_post_thumbnail_id($page->ID))
        ];
    }
    return $flatPages;
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
            "post_image" => wp_get_attachment_url(get_post_thumbnail_id($page->ID))
        ];
    }
    return $flatPages;
}

function getFlatCategories () {
    $categories = get_categories();
    $flatCategories = [];
    foreach($categories as $item) {
        $flatCategories[] = [
            "term_id" => $item->term_id,
            "name" => $item->name,
            "slug" => $item->slug
        ];
    }
    return $flatCategories;
}

function getBaseData () {

    $data = [
        "menu" => getFlatMenu(),
        "pages" => getFlatPages(),
        "posts" => getFlatPosts(),
        "categories" => getFlatCategories()
    ];

    return $data;
}