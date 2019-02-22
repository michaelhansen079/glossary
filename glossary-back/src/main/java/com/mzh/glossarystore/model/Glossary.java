package com.mzh.glossarystore.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
public class Glossary {

    public Glossary(String english, String bosnian, String imageUrl) {
        this.english = english;
        this.bosnian = bosnian;
        this.imageUrl = imageUrl;
    }

    public Glossary() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(length = 50)
    @NotNull
    private String english;

    @Column(length = 50)
    @NotNull
    private String bosnian;

    @Column(length = 4000)

    private String imageUrl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english;
    }

    public String getBosnian() {
        return bosnian;
    }

    public void setBosnian(String bosnian) {
        this.bosnian = bosnian;
    }
}
