export interface UserInterface {
    avatar_url?: string;
    city?: string;
    comments_count?: number;
    country_code?: string;
    created_at?: string;
    creator_subscriptions?: [
        {
            product?: {
                id?: string
            }
        }
    ];
    creator_subscription?: {
        product?: {
            id?: string
        }
    };
    description?: string;
    followers_count?: number;
    followings_count?: number;
    first_name?: string;
    full_name?: string;
    groups_count?: number;
    id?: number;
    kind?: any;
    last_modified?: string;
    last_name?: string;
    likes_count?: number;
    playlist_likes_count?: number;
    permalink?: string;
    permalink_url?: string;
    playlist_count?: number;
    reposts_count?: number;
    track_count?: number;
    uri?: string;
    urn?: string;
    username?: string;
    verified?: boolean;
    visuals?: any;
    badges?: {
        pro?: boolean;
        pro_unlimited?: boolean;
        verified?: boolean
    };
    station_urn?: string;
    station_permalink?: string
}

export interface TrackInterface {
    artwork_url?: string;
    caption?: string;
    commentable?: boolean;
    comment_count?: number;
    created_at?: string;
    description?: string;
    downloadable?: boolean;
    download_count?: number;
    duration?: number;
    full_duration?: number;
    embeddable_by?: string;
    genre?: string;
    has_downloads_left?: boolean;
    id?: any;
    kind?: string;
    label_name?: string;
    last_modified?: string;
    license?: string;
    likes_count?: number;
    permalink?: string;
    permalink_url?: string;
    playback_count?: number;
    public?: boolean;
    publisher_metadata?: {
        id?: any;
        urn?: string;
        artist?: string;
        album_title?: string;
        contains_music?: boolean;
        upc_or_ean?: number;
        isrc?: string;
        explicit?: boolean;
        p_line?: string;
        p_line_for_display?: string;
        c_line?: string;
        c_line_for_display?: string;
        release_title?: string
    };
    purchase_title?: string;
    purchase_url?: string;
    release_date?: string;
    reposts_count?: number;
    secret_token?: string;
    sharing?: string;
    state?: string;
    streamable?: boolean;
    tag_list?: string;
    title?: string;
    track_format?: string;
    uri?: string;
    urn?: string;
    user_id?: 333003091;
    visuals?: any;
    waveform_url?: string;
    display_date?: string;
    media?: {
        transcodings?: [
            {
                url?: string;
                preset?: string;
                duration?: number;
                snipped?: boolean;
                format?: {
                    protocol?: string;
                    mime_type?: string
                };
                quality?: string
            }
        ]
    };
    station_urn?: string;
    station_permalink?: string;
    monetization_model?: string;
    policy?: string;
    user?: UserInterface
}

export interface PlayListInterface {
    artwork_url?: string;
    created_at?: string;
    description?: string;
    duration?: number;
    embeddable_by?: string;
    genre?: string;
    id?: number;
    kind?: string;
    label_name?: string;
    last_modified?: string;
    license?: string;
    likes_count?: number;
    managed_by_feeds?: boolean;
    permalink?: string;
    permalink_url?: string;
    public?: boolean;
    purchase_title?: string;
    purchase_url?: string;
    release_date?: string;
    reposts_count?: number;
    secret_token?: string;
    sharing?: string;
    tag_list?: any;
    title?: string;
    uri?: string;
    user_id?: number;
    set_type?: string;// album | null
    is_album?: boolean;
    published_at?: string;
    display_date?: string;
    user?: UserInterface;
    tracks: Array<TrackInterface>;
    track_count: number;
}

export interface SearchResultInterface <T> {
    collection: Array<T>;
    next_href: string;
    query_urn: string;
    total_results: number;
}

export interface QueriesSuggessInterface {
    collection?: Array<{
        output: string
        query: string
    }>;
    next_href?: string;
    query_urn?: string;
}

export interface MixedSelectionsResultInterface {
    collection: Array<{
        urn: string;
        query_urn: string;
        title: string;
        description: string;
        tracking_feature_name: string;
        last_updated: string;
        style: string;
        social_proof: string;
        social_proof_users: string;
        items: SearchResultInterface<TrackInterface | UserInterface | PlayListInterface>;
        kind: string;
        id: string;
    }>;
    next_href: string;
    query_urn: string;
}