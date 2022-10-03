package com.knf.dev.controllers;

import com.knf.dev.models.DetailsUser;
import com.knf.dev.repository.UserDetailsRepository;
import com.knf.dev.security.services.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 4700)
@RestController
@RequestMapping("/api/user")
public class UserDetailController {

    @Autowired
    UserDetailService userDetailService;

    @Autowired
    UserDetailsRepository userDetailsRepository;

    public UserDetailController(UserDetailService userDetailService) {
        this.userDetailService = userDetailService;
    }

    @GetMapping("/list")
    public List<DetailsUser> list() {
        return userDetailService.getList();
    }


    @PostMapping("/save")
    public DetailsUser saveUser(@RequestBody DetailsUser user){
        return userDetailService.saveUser(user);
    }


}
