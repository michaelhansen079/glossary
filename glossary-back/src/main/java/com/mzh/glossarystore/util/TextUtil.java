package com.mzh.glossarystore.util;

public class TextUtil{

    public String sanitize(String text) {
        return text.replaceAll("\\s+", " ");
    }

    @Override
    public String toString() {
        return "hello";
    }
}