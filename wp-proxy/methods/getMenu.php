<?php

function getMenu ($menuName) {

    function buildTree( array &$elements, $parentId = 0 )
    {
        $branch = array();
        foreach ( $elements as &$element )
        {
            if ( $element->menu_item_parent == $parentId )
            {
                $children = buildTree( $elements, $element->ID );
                if ( $children )
                    $element->wpse_children = $children;

                $branch[$element->ID] = $element;
                unset( $element );
            }
        }
        return $branch;
    }

    function wpse_nav_menu_2_tree( $menu_id )
    {
        $items = wp_get_nav_menu_items( $menu_id );
        return  $items ? buildTree( $items, 0 ) : null;
    }

    return wpse_nav_menu_2_tree($menuName);
}