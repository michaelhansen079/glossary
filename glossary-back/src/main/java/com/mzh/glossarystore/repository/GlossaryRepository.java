package com.mzh.glossarystore.repository;

import com.mzh.glossarystore.model.Glossary;
import com.mzh.glossarystore.util.TextUtil;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import javax.validation.constraints.NotNull;
import java.util.List;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

@Transactional(SUPPORTS)
public class GlossaryRepository {

    @PersistenceContext(unitName = "GlossaryPU")
    private EntityManager em;

    @Inject
    private TextUtil textUtil;

    public List<Glossary> findAll() {
        TypedQuery<Glossary> tq = em.createQuery("SELECT b from Glossary b ORDER BY b.english DESC", Glossary.class);
        return tq.getResultList();
    }

    public long getCount() {
        TypedQuery<Long> tq = em.createQuery("SELECT count(g.id) from Glossary g", Long.class);
        return tq.getSingleResult();
    }

    public Glossary find(@NotNull  Long id) {
        return em.find(Glossary.class, id);
    }

    @Transactional(REQUIRED)
    public Glossary create(@NotNull Glossary glossary) {
        glossary.setBosnian(textUtil.sanitize(glossary.getBosnian()));
        glossary.setEnglish(textUtil.sanitize(glossary.getEnglish()));
        glossary.setImageUrl(textUtil.sanitize(glossary.getImageUrl()));
        em.persist(glossary);
        return glossary;
    }

    @Transactional(REQUIRED)
    public Glossary update(@NotNull Glossary glossary) {
        Glossary entityToUpdate = em.find(Glossary.class, glossary.getId());
        if(glossary.getBosnian() != null) {
            entityToUpdate.setBosnian(textUtil.sanitize(glossary.getBosnian()));
        }
        if(glossary.getEnglish() != null) {
            entityToUpdate.setEnglish(textUtil.sanitize(glossary.getEnglish()));
        }
        if(glossary.getImageUrl() != null) {
            entityToUpdate.setImageUrl(textUtil.sanitize(glossary.getImageUrl()));
        }
        return entityToUpdate;
    }

    @Transactional(REQUIRED)
    public void delete(@NotNull Long id) {
        Glossary glossary = em.getReference(Glossary.class, id);
        em.remove(glossary);
    }
}
